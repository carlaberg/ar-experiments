import { 
  Mesh,
  MeshBasicMaterial,
  BoxBufferGeometry,
  Object3D,
  Vector3 
} from 'three'

export class Cube {
  private materials: MeshBasicMaterial[] = [
    new MeshBasicMaterial({color: 0xff0000}),
    new MeshBasicMaterial({color: 0x0000ff}),
    new MeshBasicMaterial({color: 0x00ff00}),
    new MeshBasicMaterial({color: 0xff00ff}),
    new MeshBasicMaterial({color: 0x00ffff}),
    new MeshBasicMaterial({color: 0xffff00})  
  ];
  private cube: Object3D = new Mesh(new BoxBufferGeometry(0.2, 0.2, 0.2), this.materials);

  constructor() {
    this.cube.position.set(1, 1, 1);
  }

  public get getCube(): Object3D {
    return this.cube;
  }
}