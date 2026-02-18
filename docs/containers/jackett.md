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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6617" onclick="CopyToClipboard('tag6617');return false;" class="tag-decoration">release</div><div id="tag27447" onclick="CopyToClipboard('tag27447');return false;" class="tag-decoration">release-f9484de</div><div id="tag3195" onclick="CopyToClipboard('tag3195');return false;" class="tag-decoration">release-0.24.1147</div><div id="tag27320" onclick="CopyToClipboard('tag27320');return false;" class="tag-decoration">release-v0</div><div id="tag28335" onclick="CopyToClipboard('tag28335');return false;" class="tag-decoration">release-v0.24</div><div id="tag9412" onclick="CopyToClipboard('tag9412');return false;" class="tag-decoration">release-v0.24.1147</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f9484dee5d14c526144146459dac2b070c115b22" target="_blank">Version update: 0.24.1140 => 0.24.1147</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22130144735" target="_blank">2026-02-18 07:07:42</a></td></tr>
<tr><td><div id="tag13177" onclick="CopyToClipboard('tag13177');return false;" class="tag-decoration">testing</div><div id="tag29292" onclick="CopyToClipboard('tag29292');return false;" class="tag-decoration">testing-133bec1</div><div id="tag27951" onclick="CopyToClipboard('tag27951');return false;" class="tag-decoration">testing-0.24.1147</div><div id="tag3114" onclick="CopyToClipboard('tag3114');return false;" class="tag-decoration">testing-v0</div><div id="tag17173" onclick="CopyToClipboard('tag17173');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19616" onclick="CopyToClipboard('tag19616');return false;" class="tag-decoration">testing-v0.24.1147</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/133bec1b7046fb24abb771bdf3b0cf170886e5c8" target="_blank">Version update: 0.24.1140 => 0.24.1147</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22130145491" target="_blank">2026-02-18 07:07:43</a></td></tr>
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
