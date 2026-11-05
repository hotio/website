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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22312" onclick="CopyToClipboard('tag22312');return false;" class="tag-decoration">release</div><div id="tag14834" onclick="CopyToClipboard('tag14834');return false;" class="tag-decoration">release-6658e18</div><div id="tag30463" onclick="CopyToClipboard('tag30463');return false;" class="tag-decoration">release-2.18.2</div><div id="tag28707" onclick="CopyToClipboard('tag28707');return false;" class="tag-decoration">release-v2</div><div id="tag15652" onclick="CopyToClipboard('tag15652');return false;" class="tag-decoration">release-v2.18</div><div id="tag10395" onclick="CopyToClipboard('tag10395');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/6658e1836f04df174c972694f4efe4276a99b8fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42083345301" target="_blank">2026-11-05 18:20:48</a></td></tr>
<tr><td><div id="tag24965" onclick="CopyToClipboard('tag24965');return false;" class="tag-decoration">testing</div><div id="tag20314" onclick="CopyToClipboard('tag20314');return false;" class="tag-decoration">testing-0927188</div><div id="tag23104" onclick="CopyToClipboard('tag23104');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag24139" onclick="CopyToClipboard('tag24139');return false;" class="tag-decoration">testing-v2</div><div id="tag31240" onclick="CopyToClipboard('tag31240');return false;" class="tag-decoration">testing-v2.18</div><div id="tag10655" onclick="CopyToClipboard('tag10655');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/09271888d3baf94c4f9038c1928e033a92a370cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42132624605" target="_blank">2026-11-05 23:52:00</a></td></tr>
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
