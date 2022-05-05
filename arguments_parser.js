module.exports = class {

  static parse(argv) {
    const i = new this(argv); 
    i.seek();
    i.seek();
    return i.parseCommand();
  }

  constructor(argv) {
    this.index = 0;
    this.argv = argv;
  }

  hasNext() {
    return this.index < this.argv.length;
  }

  isOver() {
    return this.argv.length <= this.index;
  }

  peek() {
    return this.argv[this.index];
  }

  lookahead(n) {
    if (this.index + n < this.argv.length) {
      return this.argv[this.index + n];
    }
  }

  seek() {
    if (this.hasNext()) {
      return this.argv[this.index++];
    }
  }

  getRootUrl(rootUrl) {
    return rootUrl || 'https://script.googleapis.com';
  }

  parseCommand() {
    const token = this.seek();

    if (false) {
    } else if (token === "processes") {
      return this.parseProcesses();
    } else if (token === "projects") {
      return this.parseProjects();
    } else if (token === "projects.deployments") {
      return this.parseProjectsDeployments();
    } else if (token === "projects.versions") {
      return this.parseProjectsVersions();
    } else if (token === "scripts") {
      return this.parseScripts();
    } else {
      console.log("no command.");
    }
  }

  parseProcesses() {
    const token = this.seek();

    if (false) {
    } else if (token === "list") {
      return this.parseProcessesList();
    } else if (token === "listScriptProcesses") {
      return this.parseProcessesListScriptProcesses();
    } else {
      console.log("no command.");
    }
  }

  parseProcessesList() {
    console.log("processes list");
  }

  parseProcessesListScriptProcesses() {
    console.log("processes listScriptProcesses");
  }

  parseProjects() {
    const token = this.seek();

    if (false) {
    } else if (token === "create") {
      return this.parseProjectsCreate();
    } else if (token === "get") {
      return this.parseProjectsGet();
    } else if (token === "getContent") {
      return this.parseProjectsGetContent();
    } else if (token === "getMetrics") {
      return this.parseProjectsGetMetrics();
    } else if (token === "updateContent") {
      return this.parseProjectsUpdateContent();
    } else {
      console.log("no command.");
    }
  }

  parseProjectsCreate() {
    console.log("projects create");
  }

  parseProjectsGet() {
    console.log("projects get");
  }

  parseProjectsGetContent() {
    console.log("projects getContent");
  }

  parseProjectsGetMetrics() {
    console.log("projects getMetrics");
  }

  parseProjectsUpdateContent() {
    console.log("projects updateContent");
  }

  parseProjectsDeployments() {
    const token = this.seek();

    if (false) {
    } else if (token === "list") {
      return this.parseProjectsDeploymentsList();
    } else if (token === "create") {
      return this.parseProjectsDeploymentsCreate();
    } else if (token === "get") {
      return this.parseProjectsDeploymentsGet();
    } else if (token === "update") {
      return this.parseProjectsDeploymentsUpdate();
    } else if (token === "delete") {
      return this.parseProjectsDeploymentsDelete();
    } else {
      console.log("no command.");
    }
  }

  parseProjectsDeploymentsList() {
    console.log("projects.deployments list");
  }

  parseProjectsDeploymentsCreate() {
    console.log("projects.deployments create");
  }

  parseProjectsDeploymentsGet() {
    console.log("projects.deployments get");
  }

  parseProjectsDeploymentsUpdate() {
    console.log("projects.deployments update");
  }

  parseProjectsDeploymentsDelete() {
    console.log("projects.deployments delete");
  }

  parseProjectsVersions() {
    const token = this.seek();

    if (false) {
    } else if (token === "list") {
      return this.parseProjectsVersionsList();
    } else if (token === "create") {
      return this.parseProjectsVersionsCreate();
    } else if (token === "get") {
      return this.parseProjectsVersionsGet();
    } else {
      console.log("no command.");
    }
  }

  parseProjectsVersionsList() {
    console.log("projects.versions list");
  }

  parseProjectsVersionsCreate() {
    console.log("projects.versions create");
  }

  parseProjectsVersionsGet() {
    console.log("projects.versions get");
  }

  parseScripts() {
    const token = this.seek();

    if (false) {
    } else if (token === "run") {
      return this.parseScriptsRun();
    } else {
      console.log("no command.");
    }
  }

  parseScriptsRun() {
    console.log("scripts run");
  }

};
