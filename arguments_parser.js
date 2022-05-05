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
 
    return {
      options: {
        url: this.getRootUrl() + '/v1/processes',
        method: 'GET',
      },
    };
  }

  parseProcessesListScriptProcesses() {
    console.log("processes listScriptProcesses");

    return {
      options: {
        url: this.getRootUrl() + '/v1/processes:listScriptProcesses',
        method: 'GET',
      },
    };
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

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects',
        method: 'POST',
      },
    };
  }

  parseProjectsGet() {
    const scriptId = this.seek();
    console.log("projects get");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId,
        method: 'GET',
      },
    };
  }

  parseProjectsGetContent() {
    const scriptId = this.seek();
    console.log("projects getContent");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId,
        method: 'GET',
      },
    };
  }

  parseProjectsGetMetrics() {
    const scriptId = this.seek();
    console.log("projects getMetrics");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId,
        method: 'GET',
      },
    };
  }

  parseProjectsUpdateContent() {
    const scriptId = this.seek();
    console.log("projects updateContent");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId,
        method: 'PATCH',
      },
    };
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
    const scriptId = this.seek();
    console.log("projects.deployments list");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/deployments',
        method: 'GET',
      },
    };
  }

  parseProjectsDeploymentsCreate() {
    const scriptId = this.seek();
    console.log("projects.deployments create");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/deployments',
        method: 'POST',
      },
    };
  }

  parseProjectsDeploymentsGet() {
    const scriptId = this.seek();
    console.log("projects.deployments get");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/deployments',
        method: 'GET',
      },
    };
  }

  parseProjectsDeploymentsUpdate() {
    const scriptId = this.seek();
    console.log("projects.deployments update");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/deployments',
        method: 'PATCH',
      },
    };
  }

  parseProjectsDeploymentsDelete() {
    const scriptId = this.seek();
    console.log("projects.deployments delete");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/deployments',
        method: 'DELETE',
      },
    };
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
    const scriptId = this.seek();
    console.log("projects.versions list");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/versions',
        method: 'GET',
      },
    };
  }

  parseProjectsVersionsCreate() {
    const scriptId = this.seek();
    console.log("projects.versions create");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/versions',
        method: 'POST',
      },
    };
  }

  parseProjectsVersionsGet() {
    const scriptId = this.seek();
    console.log("projects.versions get");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects/' + scriptId + '/versions',
        method: 'GET',
      },
    };
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
    const scriptId = this.seek();
    console.log("scripts run");

    return {
      options: {
        url: this.getRootUrl() + '/v1/projects.versions/' + scriptId + ':run',
        method: 'POST',
      },
    };
  }

};
