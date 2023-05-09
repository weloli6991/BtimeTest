export interface IBoard {
  id: string;
  title: string;
  rows: IRowBoard[];
}

export interface IRowBoard {
  id: string;
  title: string;
  date: string;
  where: string;
  priority: 0 | 1 | 2 | 3;
  responsibles: IResponsiblesBoard[];
  description: string;
}

export interface IResponsiblesBoard {
  id: number;
  name: string;
  icon: any;
}
