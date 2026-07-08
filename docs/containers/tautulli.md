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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10096" onclick="CopyToClipboard('tag10096');return false;" class="tag-decoration">release</div><div id="tag12982" onclick="CopyToClipboard('tag12982');return false;" class="tag-decoration">release-ba5bbc1</div><div id="tag492" onclick="CopyToClipboard('tag492');return false;" class="tag-decoration">release-2.17.2</div><div id="tag28628" onclick="CopyToClipboard('tag28628');return false;" class="tag-decoration">release-v2</div><div id="tag7747" onclick="CopyToClipboard('tag7747');return false;" class="tag-decoration">release-v2.17</div><div id="tag21968" onclick="CopyToClipboard('tag21968');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ba5bbc1fdacbe566eedcfcc5c70bf6163830daff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28978474431" target="_blank">2026-07-08 21:55:11</a></td></tr>
<tr><td><div id="tag19236" onclick="CopyToClipboard('tag19236');return false;" class="tag-decoration">testing</div><div id="tag21767" onclick="CopyToClipboard('tag21767');return false;" class="tag-decoration">testing-8d69380</div><div id="tag19909" onclick="CopyToClipboard('tag19909');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag9086" onclick="CopyToClipboard('tag9086');return false;" class="tag-decoration">testing-v2</div><div id="tag22476" onclick="CopyToClipboard('tag22476');return false;" class="tag-decoration">testing-v2.17</div><div id="tag16076" onclick="CopyToClipboard('tag16076');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/8d69380896aee7f8258e5ae76a58fe41a1d7fca0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28978478330" target="_blank">2026-07-08 21:55:15</a></td></tr>
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
