/* Parametric MPFL TCS explorer. Generic round defaults. No vendor tables. */
(function () {
  "use strict";

  const SIGMA = 5.670374419e-8;

  const DEFAULTS = {
    heatKw: 200,
    mdot: 5,
    tOutC: 70,
    cp: 4000,
    rhoF: 1000,
    muMpas: 1.0,
    kF: 0.5,
    nTrays: 30,
    aProvided: 180,
    nWings: 2,
    nPanels: 10,
    panelW: 2,
    panelL: 5,
    eps: 0.9,
    tSinkK: 180,
    nSides: 2,
    chWmm: 8,
    chHmm: 4,
    sheetMm: 0.5,
    kAl: 160,
    nCh: 80,
    rhoAl: 2700,
    massCeil: 500,
    flexIdMm: 10,
    flexLm: 0.5,
    flexWallMm: 1,
    psatKpa: 0.3,
    npshKpa: 5,
    ntuCp: 2,
    dtJc: 10,
  };
