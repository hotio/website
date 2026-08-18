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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8435" onclick="CopyToClipboard('tag8435');return false;" class="tag-decoration">release</div><div id="tag24844" onclick="CopyToClipboard('tag24844');return false;" class="tag-decoration">release-7d61e1a</div><div id="tag31975" onclick="CopyToClipboard('tag31975');return false;" class="tag-decoration">release-2.17.2</div><div id="tag20185" onclick="CopyToClipboard('tag20185');return false;" class="tag-decoration">release-v2</div><div id="tag28806" onclick="CopyToClipboard('tag28806');return false;" class="tag-decoration">release-v2.17</div><div id="tag1515" onclick="CopyToClipboard('tag1515');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7d61e1ace7d5bdc510c362fe51fd7c58066e9b57" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32147618708" target="_blank">2026-08-18 14:19:19</a></td></tr>
<tr><td><div id="tag12614" onclick="CopyToClipboard('tag12614');return false;" class="tag-decoration">testing</div><div id="tag15084" onclick="CopyToClipboard('tag15084');return false;" class="tag-decoration">testing-76d8f9a</div><div id="tag5600" onclick="CopyToClipboard('tag5600');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag16446" onclick="CopyToClipboard('tag16446');return false;" class="tag-decoration">testing-v2</div><div id="tag22447" onclick="CopyToClipboard('tag22447');return false;" class="tag-decoration">testing-v2.17</div><div id="tag22763" onclick="CopyToClipboard('tag22763');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/76d8f9a0edb7926b68cb69d5475ee5caa352b1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/31876454373" target="_blank">2026-08-15 09:13:31</a></td></tr>
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
