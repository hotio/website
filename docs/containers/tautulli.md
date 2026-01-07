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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25692" onclick="CopyToClipboard('tag25692');return false;" class="tag-decoration">release</div><div id="tag8607" onclick="CopyToClipboard('tag8607');return false;" class="tag-decoration">release-2.16.0</div><div id="tag21823" onclick="CopyToClipboard('tag21823');return false;" class="tag-decoration">release-1bd4d6d</div><div id="tag20016" onclick="CopyToClipboard('tag20016');return false;" class="tag-decoration">release-v2</div><div id="tag7074" onclick="CopyToClipboard('tag7074');return false;" class="tag-decoration">release-v2.16</div><div id="tag22123" onclick="CopyToClipboard('tag22123');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/1bd4d6d5033f2687ba9b85a180f9e1ce04b78310" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20770109965" target="_blank">2026-01-07 03:58:01</a></td></tr>
<tr><td><div id="tag30122" onclick="CopyToClipboard('tag30122');return false;" class="tag-decoration">testing</div><div id="tag18475" onclick="CopyToClipboard('tag18475');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag760" onclick="CopyToClipboard('tag760');return false;" class="tag-decoration">testing-cd20e3b</div><div id="tag7129" onclick="CopyToClipboard('tag7129');return false;" class="tag-decoration">testing-v2</div><div id="tag413" onclick="CopyToClipboard('tag413');return false;" class="tag-decoration">testing-v2.16</div><div id="tag14186" onclick="CopyToClipboard('tag14186');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/tautulli/actions/runs/20690840915" target="_blank">2026-01-04 09:27:11</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name tautulli \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

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
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
