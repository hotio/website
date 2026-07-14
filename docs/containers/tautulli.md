---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6742" onclick="CopyToClipboard('tag6742');return false;" class="tag-decoration">release</div><div id="tag29420" onclick="CopyToClipboard('tag29420');return false;" class="tag-decoration">release-7dac3f5</div><div id="tag18343" onclick="CopyToClipboard('tag18343');return false;" class="tag-decoration">release-2.17.2</div><div id="tag22053" onclick="CopyToClipboard('tag22053');return false;" class="tag-decoration">release-v2</div><div id="tag31950" onclick="CopyToClipboard('tag31950');return false;" class="tag-decoration">release-v2.17</div><div id="tag2449" onclick="CopyToClipboard('tag2449');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7dac3f57972c59f3ec5563f179502d802aff29a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29320334369" target="_blank">2026-07-14 09:04:07</a></td></tr>
<tr><td><div id="tag26487" onclick="CopyToClipboard('tag26487');return false;" class="tag-decoration">testing</div><div id="tag30661" onclick="CopyToClipboard('tag30661');return false;" class="tag-decoration">testing-77fadc2</div><div id="tag7649" onclick="CopyToClipboard('tag7649');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag17999" onclick="CopyToClipboard('tag17999');return false;" class="tag-decoration">testing-v2</div><div id="tag25564" onclick="CopyToClipboard('tag25564');return false;" class="tag-decoration">testing-v2.17</div><div id="tag3261" onclick="CopyToClipboard('tag3261');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/77fadc25f7a88921349eed44cddfc39fe2d5755a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/29320331111" target="_blank">2026-07-14 09:04:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
