import Dexie from "dexie";
export interface Paciente {
  id?: number;
  nombre?: string;
  carnetIdentidad?: string;
  numeroCama?: string;
  numeroPiso?: string;
  detalle?: string;
  fecha?: string;
}
export class PacienteDatabase extends Dexie {
  public pacientes: Dexie.Table<Paciente, number>; // id is number in this case

  public constructor() {
    super("Magensonde");
    this.version(2).stores({
      pacientes:
        "++id,nombre,carnetIdentidad,numeroCama,numeroPiso,detalle, fecha",
    });
    this.pacientes = this.table("pacientes");
    // this.pacientes.clear();
  }
  getAll(): Promise<Paciente[]> {
    return this.pacientes.toArray();
  }
  add(paciente: Paciente): Promise<number> {
    return this.pacientes.add({ ...paciente, fecha: new Date().toISOString() });
  }
  deleteById(id: number): Promise<void> {
    return this.pacientes.delete(id);
  }
}
