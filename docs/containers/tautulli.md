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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21962" onclick="CopyToClipboard('tag21962');return false;" class="tag-decoration">release</div><div id="tag21714" onclick="CopyToClipboard('tag21714');return false;" class="tag-decoration">release-dedf6d3</div><div id="tag29968" onclick="CopyToClipboard('tag29968');return false;" class="tag-decoration">release-2.17.0</div><div id="tag323" onclick="CopyToClipboard('tag323');return false;" class="tag-decoration">release-v2</div><div id="tag331" onclick="CopyToClipboard('tag331');return false;" class="tag-decoration">release-v2.17</div><div id="tag17293" onclick="CopyToClipboard('tag17293');return false;" class="tag-decoration">release-v2.17.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/dedf6d39b3432c798e7e6fc104bbec94a9c84146" target="_blank">Version update: 2.16.1 => 2.17.0</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/23675654401" target="_blank">2026-03-28 02:39:04</a></td></tr>
<tr><td><div id="tag9781" onclick="CopyToClipboard('tag9781');return false;" class="tag-decoration">testing</div><div id="tag10122" onclick="CopyToClipboard('tag10122');return false;" class="tag-decoration">testing-5d2d14d</div><div id="tag12652" onclick="CopyToClipboard('tag12652');return false;" class="tag-decoration">testing-2.17.0</div><div id="tag15562" onclick="CopyToClipboard('tag15562');return false;" class="tag-decoration">testing-v2</div><div id="tag23323" onclick="CopyToClipboard('tag23323');return false;" class="tag-decoration">testing-v2.17</div><div id="tag25707" onclick="CopyToClipboard('tag25707');return false;" class="tag-decoration">testing-v2.17.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/5d2d14dc88f6dd29da931f24ac65476470c6231d" target="_blank">Version update: 2.16.1 => 2.17.0</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/23675654944" target="_blank">2026-03-28 02:39:07</a></td></tr>
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
