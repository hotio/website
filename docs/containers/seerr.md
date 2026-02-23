---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag17543" onclick="CopyToClipboard('tag17543');return false;" class="tag-decoration">nightly</div><div id="tag17038" onclick="CopyToClipboard('tag17038');return false;" class="tag-decoration">nightly-5e87a99</div><div id="tag21552" onclick="CopyToClipboard('tag21552');return false;" class="tag-decoration">nightly-cd8b386bf819a8874f5384dcd397422f001fb1d3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/5e87a99d441b2fc0d63207c8b2149697a508f555" target="_blank">Version update: 947f70c3d7c370453b9000691ac17a34a8fcebb7 => cd8b386bf819a8874f5384dcd397422f001fb1d3</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22326752422" target="_blank">2026-02-23 22:03:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9256" onclick="CopyToClipboard('tag9256');return false;" class="tag-decoration">release</div><div id="tag5429" onclick="CopyToClipboard('tag5429');return false;" class="tag-decoration">release-ee64b06</div><div id="tag24480" onclick="CopyToClipboard('tag24480');return false;" class="tag-decoration">release-3.0.1</div><div id="tag2779" onclick="CopyToClipboard('tag2779');return false;" class="tag-decoration">release-v3</div><div id="tag28905" onclick="CopyToClipboard('tag28905');return false;" class="tag-decoration">release-v3.0</div><div id="tag31773" onclick="CopyToClipboard('tag31773');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ee64b067380776071f115c0f1cee0d61a9960005" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22292138291" target="_blank">2026-02-23 03:44:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
