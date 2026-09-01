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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18458" onclick="CopyToClipboard('tag18458');return false;" class="tag-decoration">release</div><div id="tag31485" onclick="CopyToClipboard('tag31485');return false;" class="tag-decoration">release-b4894bc</div><div id="tag18487" onclick="CopyToClipboard('tag18487');return false;" class="tag-decoration">release-2.18.1</div><div id="tag13878" onclick="CopyToClipboard('tag13878');return false;" class="tag-decoration">release-v2</div><div id="tag15407" onclick="CopyToClipboard('tag15407');return false;" class="tag-decoration">release-v2.18</div><div id="tag147" onclick="CopyToClipboard('tag147');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/b4894bc7c5212854bae7d0d32dfd8801286e795c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33524591720" target="_blank">2026-09-01 15:15:09</a></td></tr>
<tr><td><div id="tag29601" onclick="CopyToClipboard('tag29601');return false;" class="tag-decoration">testing</div><div id="tag1934" onclick="CopyToClipboard('tag1934');return false;" class="tag-decoration">testing-b3f5250</div><div id="tag23978" onclick="CopyToClipboard('tag23978');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag5649" onclick="CopyToClipboard('tag5649');return false;" class="tag-decoration">testing-v2</div><div id="tag13896" onclick="CopyToClipboard('tag13896');return false;" class="tag-decoration">testing-v2.18</div><div id="tag23687" onclick="CopyToClipboard('tag23687');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b3f525010eb60256e4857e352fec6d7056c4d2bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33524589195" target="_blank">2026-09-01 15:15:06</a></td></tr>
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
