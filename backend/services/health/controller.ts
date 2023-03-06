import { Handler } from '../../common/express';

export const getHealth: Handler = async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
};
try {
    res.send(healthcheck);
} catch (error) {
    // @ts-ignore
    healthcheck.message = error;
    res.status(503).send();
}

  return { healthcheck: healthcheck};
};
