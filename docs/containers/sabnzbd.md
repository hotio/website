---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28537" onclick="CopyToClipboard('tag28537');return false;" class="tag-decoration">nightly</div><div id="tag9833" onclick="CopyToClipboard('tag9833');return false;" class="tag-decoration">nightly-46a862a</div><div id="tag7727" onclick="CopyToClipboard('tag7727');return false;" class="tag-decoration">nightly-6289b74470299e6b7fa7719eb5eb3d9a150454eb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/46a862a98867d01f443d55f74fd38591d773d6e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28128614688" target="_blank">2026-06-24 20:48:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10920" onclick="CopyToClipboard('tag10920');return false;" class="tag-decoration">release</div><div id="tag15600" onclick="CopyToClipboard('tag15600');return false;" class="tag-decoration">release-f242b9f</div><div id="tag13706" onclick="CopyToClipboard('tag13706');return false;" class="tag-decoration">release-5.0.4</div><div id="tag23568" onclick="CopyToClipboard('tag23568');return false;" class="tag-decoration">release-v5</div><div id="tag15512" onclick="CopyToClipboard('tag15512');return false;" class="tag-decoration">release-v5.0</div><div id="tag428" onclick="CopyToClipboard('tag428');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f242b9fd1f72aaa4fa3dabd9a872d8497eab7f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27986957234" target="_blank">2026-06-22 22:01:06</a></td></tr>
<tr><td><div id="tag26063" onclick="CopyToClipboard('tag26063');return false;" class="tag-decoration">testing</div><div id="tag6658" onclick="CopyToClipboard('tag6658');return false;" class="tag-decoration">testing-cbbe932</div><div id="tag20630" onclick="CopyToClipboard('tag20630');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/cbbe93297b7ad142a3a91f2192ffa94511ff8531" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27986957041" target="_blank">2026-06-22 22:01:06</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
