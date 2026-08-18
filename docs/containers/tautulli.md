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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26694" onclick="CopyToClipboard('tag26694');return false;" class="tag-decoration">release</div><div id="tag10242" onclick="CopyToClipboard('tag10242');return false;" class="tag-decoration">release-7d61e1a</div><div id="tag30251" onclick="CopyToClipboard('tag30251');return false;" class="tag-decoration">release-2.17.2</div><div id="tag29962" onclick="CopyToClipboard('tag29962');return false;" class="tag-decoration">release-v2</div><div id="tag10850" onclick="CopyToClipboard('tag10850');return false;" class="tag-decoration">release-v2.17</div><div id="tag19434" onclick="CopyToClipboard('tag19434');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7d61e1ace7d5bdc510c362fe51fd7c58066e9b57" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32147618708" target="_blank">2026-08-18 14:19:19</a></td></tr>
<tr><td><div id="tag8341" onclick="CopyToClipboard('tag8341');return false;" class="tag-decoration">testing</div><div id="tag4385" onclick="CopyToClipboard('tag4385');return false;" class="tag-decoration">testing-3862a4a</div><div id="tag18104" onclick="CopyToClipboard('tag18104');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag1975" onclick="CopyToClipboard('tag1975');return false;" class="tag-decoration">testing-v2</div><div id="tag21785" onclick="CopyToClipboard('tag21785');return false;" class="tag-decoration">testing-v2.17</div><div id="tag16015" onclick="CopyToClipboard('tag16015');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/3862a4a40fb86260ec0ba732ff961eb76534ca36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32147622494" target="_blank">2026-08-18 14:19:19</a></td></tr>
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
