import { Object3D, Scene as ThreeScene } from 'three'

export class Scene {
  private scene: ThreeScene = new ThreeScene();

  get getScene(): ThreeScene {
    return this.scene;
  }

  public add(object: Object3D): void {
    this.scene.add(object);
  }
}