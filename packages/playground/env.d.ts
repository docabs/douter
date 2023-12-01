/// <reference types="vite/client" />
/// <reference path="docue-router/global.d.ts"/>

declare module '*.docue' {
  import { Component } from 'docuejs'
  var component: Component
  export default component
}
