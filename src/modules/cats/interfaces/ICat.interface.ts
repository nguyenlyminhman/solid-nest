export interface ICat {
  id: number;
  name: string;
  height: number;
  weight: number;
  color: string;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
  created_by?: number;
  updated_by?: number;
}
