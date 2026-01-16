---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7178" onclick="CopyToClipboard('tag7178');return false;" class="tag-decoration">release</div><div id="tag11601" onclick="CopyToClipboard('tag11601');return false;" class="tag-decoration">release-9c6b113</div><div id="tag14910" onclick="CopyToClipboard('tag14910');return false;" class="tag-decoration">release-0.24.863</div><div id="tag32474" onclick="CopyToClipboard('tag32474');return false;" class="tag-decoration">release-v0</div><div id="tag21302" onclick="CopyToClipboard('tag21302');return false;" class="tag-decoration">release-v0.24</div><div id="tag17689" onclick="CopyToClipboard('tag17689');return false;" class="tag-decoration">release-v0.24.863</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9c6b11336e26a18286d301eb9b8e79e87e9b7742" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21059642862" target="_blank">2026-01-16 07:55:03</a></td></tr>
<tr><td><div id="tag23677" onclick="CopyToClipboard('tag23677');return false;" class="tag-decoration">testing</div><div id="tag30416" onclick="CopyToClipboard('tag30416');return false;" class="tag-decoration">testing-731eb68</div><div id="tag8625" onclick="CopyToClipboard('tag8625');return false;" class="tag-decoration">testing-0.24.863</div><div id="tag13898" onclick="CopyToClipboard('tag13898');return false;" class="tag-decoration">testing-v0</div><div id="tag4813" onclick="CopyToClipboard('tag4813');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5468" onclick="CopyToClipboard('tag5468');return false;" class="tag-decoration">testing-v0.24.863</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/731eb682344f98c507cb40cac7022e622b57a9dd" target="_blank">Version update: 0.24.850 => 0.24.863</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21058221630" target="_blank">2026-01-16 06:47:40</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
