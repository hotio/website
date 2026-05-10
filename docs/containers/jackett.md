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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22676" onclick="CopyToClipboard('tag22676');return false;" class="tag-decoration">release</div><div id="tag6139" onclick="CopyToClipboard('tag6139');return false;" class="tag-decoration">release-28dd954</div><div id="tag2595" onclick="CopyToClipboard('tag2595');return false;" class="tag-decoration">release-0.24.1831</div><div id="tag30351" onclick="CopyToClipboard('tag30351');return false;" class="tag-decoration">release-v0</div><div id="tag23183" onclick="CopyToClipboard('tag23183');return false;" class="tag-decoration">release-v0.24</div><div id="tag21314" onclick="CopyToClipboard('tag21314');return false;" class="tag-decoration">release-v0.24.1831</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/28dd95440b1c2eeda75ebe56c85754ee4dac924d" target="_blank">Version update: 0.24.1827 => 0.24.1831</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25622635920" target="_blank">2026-05-10 07:12:42</a></td></tr>
<tr><td><div id="tag27278" onclick="CopyToClipboard('tag27278');return false;" class="tag-decoration">testing</div><div id="tag13545" onclick="CopyToClipboard('tag13545');return false;" class="tag-decoration">testing-d3eaa81</div><div id="tag5381" onclick="CopyToClipboard('tag5381');return false;" class="tag-decoration">testing-0.24.1831</div><div id="tag7486" onclick="CopyToClipboard('tag7486');return false;" class="tag-decoration">testing-v0</div><div id="tag15199" onclick="CopyToClipboard('tag15199');return false;" class="tag-decoration">testing-v0.24</div><div id="tag21014" onclick="CopyToClipboard('tag21014');return false;" class="tag-decoration">testing-v0.24.1831</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d3eaa816ed3dab538f75c4a0601c4a61c2aed33e" target="_blank">Version update: 0.24.1827 => 0.24.1831</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25622636674" target="_blank">2026-05-10 07:12:44</a></td></tr>
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
