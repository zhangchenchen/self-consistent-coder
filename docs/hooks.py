import os

def on_env(env, config, files):
    env.globals.update({'environ': os.environ})
    return env 