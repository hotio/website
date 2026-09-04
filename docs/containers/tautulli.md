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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20490" onclick="CopyToClipboard('tag20490');return false;" class="tag-decoration">release</div><div id="tag21083" onclick="CopyToClipboard('tag21083');return false;" class="tag-decoration">release-19cbf59</div><div id="tag19884" onclick="CopyToClipboard('tag19884');return false;" class="tag-decoration">release-2.18.1</div><div id="tag18203" onclick="CopyToClipboard('tag18203');return false;" class="tag-decoration">release-v2</div><div id="tag18899" onclick="CopyToClipboard('tag18899');return false;" class="tag-decoration">release-v2.18</div><div id="tag14286" onclick="CopyToClipboard('tag14286');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/19cbf5934b4b8e396bd54c59e4de108f2732a1b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33599088421" target="_blank">2026-09-02 06:29:44</a></td></tr>
<tr><td><div id="tag17727" onclick="CopyToClipboard('tag17727');return false;" class="tag-decoration">testing</div><div id="tag1275" onclick="CopyToClipboard('tag1275');return false;" class="tag-decoration">testing-d2fb1d6</div><div id="tag16459" onclick="CopyToClipboard('tag16459');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag19460" onclick="CopyToClipboard('tag19460');return false;" class="tag-decoration">testing-v2</div><div id="tag10893" onclick="CopyToClipboard('tag10893');return false;" class="tag-decoration">testing-v2.18</div><div id="tag8231" onclick="CopyToClipboard('tag8231');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/d2fb1d67e7336e6932d5785e1f886d81272f94d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33919470085" target="_blank">2026-09-04 21:05:44</a></td></tr>
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
