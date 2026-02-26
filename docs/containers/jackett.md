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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26705" onclick="CopyToClipboard('tag26705');return false;" class="tag-decoration">release</div><div id="tag15886" onclick="CopyToClipboard('tag15886');return false;" class="tag-decoration">release-c63618e</div><div id="tag199" onclick="CopyToClipboard('tag199');return false;" class="tag-decoration">release-0.24.1218</div><div id="tag6911" onclick="CopyToClipboard('tag6911');return false;" class="tag-decoration">release-v0</div><div id="tag30899" onclick="CopyToClipboard('tag30899');return false;" class="tag-decoration">release-v0.24</div><div id="tag5728" onclick="CopyToClipboard('tag5728');return false;" class="tag-decoration">release-v0.24.1218</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c63618e5541f4ed5abb73905f29547dd61220cd2" target="_blank">Version update: 0.24.1205 => 0.24.1218</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22430269247" target="_blank">2026-02-26 06:13:21</a></td></tr>
<tr><td><div id="tag29683" onclick="CopyToClipboard('tag29683');return false;" class="tag-decoration">testing</div><div id="tag24173" onclick="CopyToClipboard('tag24173');return false;" class="tag-decoration">testing-dabcdfd</div><div id="tag21361" onclick="CopyToClipboard('tag21361');return false;" class="tag-decoration">testing-0.24.1218</div><div id="tag7100" onclick="CopyToClipboard('tag7100');return false;" class="tag-decoration">testing-v0</div><div id="tag18898" onclick="CopyToClipboard('tag18898');return false;" class="tag-decoration">testing-v0.24</div><div id="tag17771" onclick="CopyToClipboard('tag17771');return false;" class="tag-decoration">testing-v0.24.1218</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/dabcdfd4860bb96cc2f76d4d33c33d5121f73a23" target="_blank">Version update: 0.24.1205 => 0.24.1218</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22430270385" target="_blank">2026-02-26 06:13:24</a></td></tr>
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
