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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16624" onclick="CopyToClipboard('tag16624');return false;" class="tag-decoration">release</div><div id="tag32310" onclick="CopyToClipboard('tag32310');return false;" class="tag-decoration">release-85099e8</div><div id="tag4695" onclick="CopyToClipboard('tag4695');return false;" class="tag-decoration">release-2.17.1</div><div id="tag18010" onclick="CopyToClipboard('tag18010');return false;" class="tag-decoration">release-v2</div><div id="tag23397" onclick="CopyToClipboard('tag23397');return false;" class="tag-decoration">release-v2.17</div><div id="tag16690" onclick="CopyToClipboard('tag16690');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/85099e824e2a1bdb5d643362c21be50077f3d94b" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25707322246" target="_blank">2026-05-12 01:19:56</a></td></tr>
<tr><td><div id="tag24035" onclick="CopyToClipboard('tag24035');return false;" class="tag-decoration">testing</div><div id="tag14737" onclick="CopyToClipboard('tag14737');return false;" class="tag-decoration">testing-ba6e5c3</div><div id="tag6243" onclick="CopyToClipboard('tag6243');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag23615" onclick="CopyToClipboard('tag23615');return false;" class="tag-decoration">testing-v2</div><div id="tag4997" onclick="CopyToClipboard('tag4997');return false;" class="tag-decoration">testing-v2.17</div><div id="tag13643" onclick="CopyToClipboard('tag13643');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/ba6e5c3563846fe79abfbc5078346716a754099c" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25707326152" target="_blank">2026-05-12 01:20:02</a></td></tr>
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
