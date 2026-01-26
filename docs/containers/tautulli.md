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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14079" onclick="CopyToClipboard('tag14079');return false;" class="tag-decoration">release</div><div id="tag5299" onclick="CopyToClipboard('tag5299');return false;" class="tag-decoration">release-ff8550d</div><div id="tag28880" onclick="CopyToClipboard('tag28880');return false;" class="tag-decoration">release-2.16.0</div><div id="tag3573" onclick="CopyToClipboard('tag3573');return false;" class="tag-decoration">release-v2</div><div id="tag20421" onclick="CopyToClipboard('tag20421');return false;" class="tag-decoration">release-v2.16</div><div id="tag28935" onclick="CopyToClipboard('tag28935');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ff8550d6331cefe7352a3754ca654d47848ad324" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21354186251" target="_blank">2026-01-26 10:21:03</a></td></tr>
<tr><td><div id="tag5510" onclick="CopyToClipboard('tag5510');return false;" class="tag-decoration">testing</div><div id="tag27668" onclick="CopyToClipboard('tag27668');return false;" class="tag-decoration">testing-bd2cd3a</div><div id="tag14509" onclick="CopyToClipboard('tag14509');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag5941" onclick="CopyToClipboard('tag5941');return false;" class="tag-decoration">testing-v2</div><div id="tag14199" onclick="CopyToClipboard('tag14199');return false;" class="tag-decoration">testing-v2.16</div><div id="tag16172" onclick="CopyToClipboard('tag16172');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/bd2cd3a232d626534bb817fa5dba8918c793b6c7" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21354186380" target="_blank">2026-01-26 10:21:04</a></td></tr>
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
