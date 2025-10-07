export type ControlStatus = 'draft' | 'in-progress' | 'complete';

export interface FrameworkControl {
  id: number;
  title: string;
  status: ControlStatus;
}

export interface Framework {
  id: number;
  name: string;
  description: string;
  controls: FrameworkControl[];
}
