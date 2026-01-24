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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4521" onclick="CopyToClipboard('tag4521');return false;" class="tag-decoration">release</div><div id="tag25422" onclick="CopyToClipboard('tag25422');return false;" class="tag-decoration">release-3020d13</div><div id="tag14248" onclick="CopyToClipboard('tag14248');return false;" class="tag-decoration">release-0.24.912</div><div id="tag20835" onclick="CopyToClipboard('tag20835');return false;" class="tag-decoration">release-v0</div><div id="tag26758" onclick="CopyToClipboard('tag26758');return false;" class="tag-decoration">release-v0.24</div><div id="tag23072" onclick="CopyToClipboard('tag23072');return false;" class="tag-decoration">release-v0.24.912</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3020d136441217e9d86d901f24289c7e5cd4324b" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21322448107" target="_blank">2026-01-24 22:14:12</a></td></tr>
<tr><td><div id="tag14065" onclick="CopyToClipboard('tag14065');return false;" class="tag-decoration">testing</div><div id="tag13035" onclick="CopyToClipboard('tag13035');return false;" class="tag-decoration">testing-3bba600</div><div id="tag5086" onclick="CopyToClipboard('tag5086');return false;" class="tag-decoration">testing-0.24.912</div><div id="tag18524" onclick="CopyToClipboard('tag18524');return false;" class="tag-decoration">testing-v0</div><div id="tag27690" onclick="CopyToClipboard('tag27690');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27717" onclick="CopyToClipboard('tag27717');return false;" class="tag-decoration">testing-v0.24.912</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3bba60062d2e80e72492e655a69679902377b3c8" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21322448430" target="_blank">2026-01-24 22:14:14</a></td></tr>
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
