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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8974" onclick="CopyToClipboard('tag8974');return false;" class="tag-decoration">release</div><div id="tag23010" onclick="CopyToClipboard('tag23010');return false;" class="tag-decoration">release-253a5a8</div><div id="tag9044" onclick="CopyToClipboard('tag9044');return false;" class="tag-decoration">release-2.17.1</div><div id="tag7606" onclick="CopyToClipboard('tag7606');return false;" class="tag-decoration">release-v2</div><div id="tag14266" onclick="CopyToClipboard('tag14266');return false;" class="tag-decoration">release-v2.17</div><div id="tag31037" onclick="CopyToClipboard('tag31037');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/253a5a86b3c5dc88e70fe9ae8465d0d0d3bcee3a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25931346962" target="_blank">2026-05-15 17:18:15</a></td></tr>
<tr><td><div id="tag12554" onclick="CopyToClipboard('tag12554');return false;" class="tag-decoration">testing</div><div id="tag1437" onclick="CopyToClipboard('tag1437');return false;" class="tag-decoration">testing-2d55995</div><div id="tag9884" onclick="CopyToClipboard('tag9884');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag6631" onclick="CopyToClipboard('tag6631');return false;" class="tag-decoration">testing-v2</div><div id="tag16863" onclick="CopyToClipboard('tag16863');return false;" class="tag-decoration">testing-v2.17</div><div id="tag17353" onclick="CopyToClipboard('tag17353');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/2d55995808fd8e20058ef615d1d83444d8ba6b52" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25987270537" target="_blank">2026-05-17 09:36:11</a></td></tr>
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
