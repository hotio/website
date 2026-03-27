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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1863" onclick="CopyToClipboard('tag1863');return false;" class="tag-decoration">release</div><div id="tag21401" onclick="CopyToClipboard('tag21401');return false;" class="tag-decoration">release-a938454</div><div id="tag24162" onclick="CopyToClipboard('tag24162');return false;" class="tag-decoration">release-0.24.1470</div><div id="tag24331" onclick="CopyToClipboard('tag24331');return false;" class="tag-decoration">release-v0</div><div id="tag25249" onclick="CopyToClipboard('tag25249');return false;" class="tag-decoration">release-v0.24</div><div id="tag14565" onclick="CopyToClipboard('tag14565');return false;" class="tag-decoration">release-v0.24.1470</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a938454d8d9e9e946d75f4d1d0720c3113959fcc" target="_blank">Version update: 0.24.1465 => 0.24.1470</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23634556553" target="_blank">2026-03-27 06:39:47</a></td></tr>
<tr><td><div id="tag27249" onclick="CopyToClipboard('tag27249');return false;" class="tag-decoration">testing</div><div id="tag6557" onclick="CopyToClipboard('tag6557');return false;" class="tag-decoration">testing-3b8a26f</div><div id="tag438" onclick="CopyToClipboard('tag438');return false;" class="tag-decoration">testing-0.24.1470</div><div id="tag3816" onclick="CopyToClipboard('tag3816');return false;" class="tag-decoration">testing-v0</div><div id="tag27437" onclick="CopyToClipboard('tag27437');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9630" onclick="CopyToClipboard('tag9630');return false;" class="tag-decoration">testing-v0.24.1470</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3b8a26fa1300fa7431d2e6d7f02b6fab51a1ea2b" target="_blank">Version update: 0.24.1465 => 0.24.1470</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23634557023" target="_blank">2026-03-27 06:39:49</a></td></tr>
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
