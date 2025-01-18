import os

def on_env(env, config, files):
    """在所有页面启用评论"""
    def enable_comments(url):
        # 为所有页面启用评论，除了首页
        if url.endswith('index.html') or url == '':
            return False
        return True

    env.filters['enable_comments'] = enable_comments
    return env 