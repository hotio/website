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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6758" onclick="CopyToClipboard('tag6758');return false;" class="tag-decoration">release</div><div id="tag22066" onclick="CopyToClipboard('tag22066');return false;" class="tag-decoration">release-9c8c7ae</div><div id="tag30943" onclick="CopyToClipboard('tag30943');return false;" class="tag-decoration">release-2.17.1</div><div id="tag25187" onclick="CopyToClipboard('tag25187');return false;" class="tag-decoration">release-v2</div><div id="tag4606" onclick="CopyToClipboard('tag4606');return false;" class="tag-decoration">release-v2.17</div><div id="tag3109" onclick="CopyToClipboard('tag3109');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/9c8c7ae5dc9186e8a73778f46db426f9ffdd1fc2" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/26711245863" target="_blank">2026-05-31 11:23:36</a></td></tr>
<tr><td><div id="tag16100" onclick="CopyToClipboard('tag16100');return false;" class="tag-decoration">testing</div><div id="tag21012" onclick="CopyToClipboard('tag21012');return false;" class="tag-decoration">testing-2d55995</div><div id="tag27876" onclick="CopyToClipboard('tag27876');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag9712" onclick="CopyToClipboard('tag9712');return false;" class="tag-decoration">testing-v2</div><div id="tag3220" onclick="CopyToClipboard('tag3220');return false;" class="tag-decoration">testing-v2.17</div><div id="tag1561" onclick="CopyToClipboard('tag1561');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/2d55995808fd8e20058ef615d1d83444d8ba6b52" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25987270537" target="_blank">2026-05-17 09:36:11</a></td></tr>
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
