import { IWebXRApp } from './App';

export class Engine {
  private app: IWebXRApp;

  constructor() {
    this.onXRFrame = this.onXRFrame.bind(this);
  }

  public init(xrApp: IWebXRApp) {
    this.app = xrApp;
  }

  public onXRFrame(time: any, frame: any): void {
    // const xrSession = this.app.xr.getSession;
    // const glContext = this.app.canvas.getContext;
    // const renderer = this.app.renderer;
    // const camera = this.app.camera;
    // const scene = this.app.scene.getScene;

    // Queue up the next draw request.
    this.app.xr.getSession.requestAnimationFrame(this.onXRFrame);
  
    // Bind the graphics framebuffer to the baseLayer's framebuffer
    this.app.canvas.getContext.bindFramebuffer(this.app.canvas.getContext.FRAMEBUFFER, this.app.xr.getSession.renderState.baseLayer.framebuffer)
  
    // Retrieve the pose of the device.
    // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
    const pose = frame.getViewerPose(this.app.xr.referenceSpace);
    if (pose) {
      // In mobile AR, we only have one view.
      const view = pose.views[0];
  
      const viewport = this.app.xr.getSession.renderState.baseLayer.getViewport(view);
      this.app.renderer.setSize(viewport.width, viewport.height)
  
      // Use the view's transform matrix and projection matrix to configure the THREE.camera.
      this.app.camera.matrix.fromArray(view.transform.matrix)
      this.app.camera.projectionMatrix.fromArray(view.projectionMatrix);
      this.app.camera.updateMatrixWorld(true);
  
      // Render the scene with THREE.WebGLRenderer.
      this.app.renderer.render(this.app.scene.getScene, this.app.camera)
    }
  } 
}