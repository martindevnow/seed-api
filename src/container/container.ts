const container = (config: any) => {
  // console.log('config', config);
  return {
    async get(service: string) {
      if (!config[service]) {
        throw new Error(`Service ${service} not found in IoC Container`);
      }

      const serviceFactory = config[service];
      return await serviceFactory(this);
    }
  };
};

export default container;
