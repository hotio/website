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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30477" onclick="CopyToClipboard('tag30477');return false;" class="tag-decoration">release</div><div id="tag20190" onclick="CopyToClipboard('tag20190');return false;" class="tag-decoration">release-d33110a</div><div id="tag31378" onclick="CopyToClipboard('tag31378');return false;" class="tag-decoration">release-2.18.1</div><div id="tag27830" onclick="CopyToClipboard('tag27830');return false;" class="tag-decoration">release-v2</div><div id="tag11997" onclick="CopyToClipboard('tag11997');return false;" class="tag-decoration">release-v2.18</div><div id="tag5876" onclick="CopyToClipboard('tag5876');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/d33110a4feae1e6ab7c03b6d3551e1e161bf3b05" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33125669511" target="_blank">2026-08-27 23:16:10</a></td></tr>
<tr><td><div id="tag16513" onclick="CopyToClipboard('tag16513');return false;" class="tag-decoration">testing</div><div id="tag3386" onclick="CopyToClipboard('tag3386');return false;" class="tag-decoration">testing-8696910</div><div id="tag31228" onclick="CopyToClipboard('tag31228');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag27281" onclick="CopyToClipboard('tag27281');return false;" class="tag-decoration">testing-v2</div><div id="tag23006" onclick="CopyToClipboard('tag23006');return false;" class="tag-decoration">testing-v2.18</div><div id="tag9256" onclick="CopyToClipboard('tag9256');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/8696910a97b5364cad8281c9bca9254a94954ea7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33498191057" target="_blank">2026-09-01 10:35:23</a></td></tr>
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
