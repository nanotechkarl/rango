import { Middlewares, RequestMethod, RouteCallback, RouteEndpoints, RouteMethodObject, Routes } from "./types";
import http from "http";

/**
 *
 */
export interface Route extends Partial<RouteMethodObject> {
  /**
   *
   */
  path: string;
  /**
   *
   */
  children?: Route[];
  /**
   *
   */
  middlewares?: Middlewares;
}

/**
 *
 */
export interface RouteWithChildren extends Partial<RouteMethodObject> {
  /**
   *
   */
  path: string;
  /**
   *
   */
  children: Route[];
}

/**
 *
 */
export interface RouteWithMiddlewares extends Partial<RouteMethodObject> {
  /**
   *
   */
  path: string;
  /**
   *
   */
  middlewares: Middlewares;
}

/**
 *
 */
export interface RouteEndpoints {
  /**
   *
   */
  method: RequestMethod;
  /**
   *
   */
  callback: RouteCallback;
  /**
   *
   */
  middlewares: Middlewares;
}

/**
 *
 */
export interface CreateRoute {
  /**
   *
   */
  path: string;
  /**
   *
   */
  endpoints?: RouteEndpoints[];
  /**
   *
   */
  children?: Map<string, RouteObject>;
  /**
   *
   */
  middlewares?: Middlewares;
}

/**
 *
 */
export interface RouteObjectCallback {
  /**
   *
   */
  path: string;
  /**
   *
   */
  endpoints: RouteEndpoints[];
  /**
   *
   */
  children: Route[];
  /**
   *
   */
}

/**
 *
 */
export interface RouteObject {
  /**
   *
   */
  regex: RegExp;
  /**
   *
   */
  endpoints: RouteEndpoints[];
  /**
   *
   */
  path: string;
  /**
   *
   */
  middlewares: Middlewares;
  /**
   *
   */
  hasParam: boolean;
  /**
   *
   */
  children: Map<string, RouteObject>;
}

/**
 * A representation of additional methods for response object
 */
export interface ResponseObjectProps {
  /**
   *
   */
  send(args: any, statusCode?: number): void;
  /**
   *
   */
  json(json: object, statusCode?: number): void;
  /**
   *
   */
  html(html: string, statusCode?: number): void;
  /**
   *
   */
  status(code?: number): ResponseObjectProps;
}

/**
 * An object representing NodeJS Server Response with additional
 * methods added by the @mayajs/router api
 */
export interface ResponseObject extends http.ServerResponse, ResponseObjectProps {}

/**
 * An object representing NodeJS Incoming Message with additional
 * methods added by the @mayajs/router api
 */
export interface RequestObject extends http.IncomingMessage, Partial<QueryParams> {
  /**
   *
   */
  body: any;
  /**
   *
   */
  file: any;
}

export interface QueryParams {
  /**
   *
   */
  query: { [x: string]: string | string[] };
  /**
   *
   */
  params: { [x: string]: string };
  /**
   *
   */
  body: any;
  /**
   *
   */
  file: any;
}

export interface MiddlewareContext {
  /**
   *
   */
  res: ResponseObject;
  /**
   *
   */
  req: RequestObject;
  /**
   *
   */
  setStatus(code: number): void;
  /**
   *
   */
  error?: any;
}

/**
 *
 */
export interface Context extends MiddlewareContext, QueryParams {}

/**
 *
 */
export interface RouterContext extends Context {
  /**
   *
   */
  path: string;
  /**
   *
   */
  headers: http.IncomingHttpHeaders;
  /**
   *
   */
  method: RequestMethod;
}
