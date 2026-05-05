---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23916" onclick="CopyToClipboard('tag23916');return false;" class="tag-decoration">nightly</div><div id="tag22968" onclick="CopyToClipboard('tag22968');return false;" class="tag-decoration">nightly-47dd703</div><div id="tag18483" onclick="CopyToClipboard('tag18483');return false;" class="tag-decoration">nightly-1.5.7-beta.33</div><div id="tag12621" onclick="CopyToClipboard('tag12621');return false;" class="tag-decoration">nightly-v1</div><div id="tag15336" onclick="CopyToClipboard('tag15336');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag14656" onclick="CopyToClipboard('tag14656');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/47dd70399482bde6026acdeb90db60b6cf3617fd" target="_blank">Version update: 1.5.7-beta.32 => 1.5.7-beta.33</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25362706312" target="_blank">2026-05-05 07:06:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22113" onclick="CopyToClipboard('tag22113');return false;" class="tag-decoration">release</div><div id="tag25952" onclick="CopyToClipboard('tag25952');return false;" class="tag-decoration">release-817e2ae</div><div id="tag11947" onclick="CopyToClipboard('tag11947');return false;" class="tag-decoration">release-1.5.6</div><div id="tag22992" onclick="CopyToClipboard('tag22992');return false;" class="tag-decoration">release-v1</div><div id="tag8957" onclick="CopyToClipboard('tag8957');return false;" class="tag-decoration">release-v1.5</div><div id="tag26602" onclick="CopyToClipboard('tag26602');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/817e2ae83df1006d994667ba0cfbe942e3c30381" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/24552117589" target="_blank">2026-04-17 06:53:41</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
