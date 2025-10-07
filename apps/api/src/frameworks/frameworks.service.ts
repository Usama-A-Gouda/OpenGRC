import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFrameworkDto } from './dto/create-framework.dto.js';
import { UpdateFrameworkDto } from './dto/update-framework.dto.js';

export interface Framework {
  id: number;
  name: string;
  description: string;
  controls: Array<{ id: number; title: string; status: 'draft' | 'in-progress' | 'complete' }>;
}

@Injectable()
export class FrameworksService {
  private readonly frameworks: Framework[] = [
    {
      id: 1,
      name: 'NIST CSF',
      description: 'National Institute of Standards and Technology Cybersecurity Framework',
      controls: [
        { id: 101, title: 'Identify critical assets', status: 'in-progress' },
        { id: 102, title: 'Protect access to systems', status: 'draft' },
      ],
    },
    {
      id: 2,
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      controls: [
        { id: 201, title: 'Maintain an asset inventory', status: 'complete' },
        { id: 202, title: 'Implement access control policy', status: 'in-progress' },
      ],
    },
  ];

  private nextId = this.frameworks.length + 1;

  findAll(): Framework[] {
    return this.frameworks;
  }

  findOne(id: number): Framework {
    const framework = this.frameworks.find((item) => item.id === id);
    if (!framework) {
      throw new NotFoundException(`Framework with id ${id} not found`);
    }
    return framework;
  }

  create(payload: CreateFrameworkDto): Framework {
    const framework: Framework = {
      id: this.nextId++,
      name: payload.name,
      description: payload.description,
      controls: payload.controls ?? [],
    };
    this.frameworks.push(framework);
    return framework;
  }

  update(id: number, payload: UpdateFrameworkDto): Framework {
    const framework = this.findOne(id);
    framework.name = payload.name ?? framework.name;
    framework.description = payload.description ?? framework.description;
    if (payload.controls) {
      framework.controls = payload.controls;
    }
    return framework;
  }

  remove(id: number): void {
    const index = this.frameworks.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Framework with id ${id} not found`);
    }
    this.frameworks.splice(index, 1);
  }
}
