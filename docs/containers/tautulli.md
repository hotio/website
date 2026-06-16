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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16680" onclick="CopyToClipboard('tag16680');return false;" class="tag-decoration">release</div><div id="tag1624" onclick="CopyToClipboard('tag1624');return false;" class="tag-decoration">release-44691ea</div><div id="tag31515" onclick="CopyToClipboard('tag31515');return false;" class="tag-decoration">release-2.17.2</div><div id="tag16871" onclick="CopyToClipboard('tag16871');return false;" class="tag-decoration">release-v2</div><div id="tag23174" onclick="CopyToClipboard('tag23174');return false;" class="tag-decoration">release-v2.17</div><div id="tag28711" onclick="CopyToClipboard('tag28711');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/44691eaf1e0e09362bb059f0e052689d5ad6bac8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27633472997" target="_blank">2026-06-16 16:45:10</a></td></tr>
<tr><td><div id="tag7635" onclick="CopyToClipboard('tag7635');return false;" class="tag-decoration">testing</div><div id="tag9318" onclick="CopyToClipboard('tag9318');return false;" class="tag-decoration">testing-6e08c37</div><div id="tag20735" onclick="CopyToClipboard('tag20735');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag29997" onclick="CopyToClipboard('tag29997');return false;" class="tag-decoration">testing-v2</div><div id="tag13679" onclick="CopyToClipboard('tag13679');return false;" class="tag-decoration">testing-v2.17</div><div id="tag32165" onclick="CopyToClipboard('tag32165');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/6e08c370b55718d2b262e5925af8160e2eaaae2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/27633469539" target="_blank">2026-06-16 16:45:07</a></td></tr>
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
