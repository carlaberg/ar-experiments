import type { XRSession, XRSystem, XRReferenceSpace } from "webxr";

export class WebXR {
  private session: XRSession;
  private xr = (navigator as any)?.xr as XRSystem;
  public  referenceSpace: XRReferenceSpace;

  public async start(glContext: WebGLRenderingContext):Promise<void> {
    const xrSession = await this.createSession();
    this.session = xrSession;
    this.activate(glContext);
    this.referenceSpace = await this.session.requestReferenceSpace('local');
  }

  get getSession(): XRSession {
    return this.session;
  }

  private async createSession():Promise<XRSession> {
      return await this.xr.requestSession("immersive-ar");
  }

  private activate(glContext: WebGLRenderingContext):void {
    
    this.session.updateRenderState({
      // @ts-ignore
      baseLayer: new XRWebGLLayer(this.session, glContext),
      depthFar: 1000,
      depthNear: 0.1
    });
  }
}