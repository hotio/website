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
<tr><td><div id="tag20116" onclick="CopyToClipboard('tag20116');return false;" class="tag-decoration">nightly</div><div id="tag13109" onclick="CopyToClipboard('tag13109');return false;" class="tag-decoration">nightly-f13f1cc</div><div id="tag6809" onclick="CopyToClipboard('tag6809');return false;" class="tag-decoration">nightly-1.6.3-beta.6</div><div id="tag2913" onclick="CopyToClipboard('tag2913');return false;" class="tag-decoration">nightly-v1</div><div id="tag16016" onclick="CopyToClipboard('tag16016');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag18253" onclick="CopyToClipboard('tag18253');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f13f1cce0238f67a1d0a69ac38090b33da445bc1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37482482031" target="_blank">2026-10-06 14:51:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18265" onclick="CopyToClipboard('tag18265');return false;" class="tag-decoration">release</div><div id="tag19639" onclick="CopyToClipboard('tag19639');return false;" class="tag-decoration">release-19b930f</div><div id="tag15452" onclick="CopyToClipboard('tag15452');return false;" class="tag-decoration">release-1.6.2</div><div id="tag29273" onclick="CopyToClipboard('tag29273');return false;" class="tag-decoration">release-v1</div><div id="tag28232" onclick="CopyToClipboard('tag28232');return false;" class="tag-decoration">release-v1.6</div><div id="tag15704" onclick="CopyToClipboard('tag15704');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/19b930f3629c7f8ffa0f189da4254a21d6c92aeb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37482477489" target="_blank">2026-10-06 14:51:26</a></td></tr>
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
