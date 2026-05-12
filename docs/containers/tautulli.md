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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9372" onclick="CopyToClipboard('tag9372');return false;" class="tag-decoration">release</div><div id="tag2856" onclick="CopyToClipboard('tag2856');return false;" class="tag-decoration">release-ba2c187</div><div id="tag2970" onclick="CopyToClipboard('tag2970');return false;" class="tag-decoration">release-2.17.1</div><div id="tag16635" onclick="CopyToClipboard('tag16635');return false;" class="tag-decoration">release-v2</div><div id="tag17411" onclick="CopyToClipboard('tag17411');return false;" class="tag-decoration">release-v2.17</div><div id="tag26750" onclick="CopyToClipboard('tag26750');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ba2c18730bc37e1a45367ae00e06fb27c4356544" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25715052107" target="_blank">2026-05-12 05:19:40</a></td></tr>
<tr><td><div id="tag12025" onclick="CopyToClipboard('tag12025');return false;" class="tag-decoration">testing</div><div id="tag21912" onclick="CopyToClipboard('tag21912');return false;" class="tag-decoration">testing-437c5ac</div><div id="tag31658" onclick="CopyToClipboard('tag31658');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag15453" onclick="CopyToClipboard('tag15453');return false;" class="tag-decoration">testing-v2</div><div id="tag5260" onclick="CopyToClipboard('tag5260');return false;" class="tag-decoration">testing-v2.17</div><div id="tag13062" onclick="CopyToClipboard('tag13062');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/437c5ac0bc900d00f8cc05df65c67ac3c731b4a8" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25715053808" target="_blank">2026-05-12 05:19:44</a></td></tr>
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
