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
<tr><td><div id="tag19172" onclick="CopyToClipboard('tag19172');return false;" class="tag-decoration">nightly</div><div id="tag17227" onclick="CopyToClipboard('tag17227');return false;" class="tag-decoration">nightly-917b52c</div><div id="tag728" onclick="CopyToClipboard('tag728');return false;" class="tag-decoration">nightly-ddc84542eb78a8021392e66c1554ee0f38a4cc96</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/917b52cf49472ad098af23cd596ace408ce0606b" target="_blank">Version update: 43a9678f0729a034c81c6fbb758adc1228b14e55 => ddc84542eb78a8021392e66c1554ee0f38a4cc96</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21353477583" target="_blank">2026-01-26 09:57:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23876" onclick="CopyToClipboard('tag23876');return false;" class="tag-decoration">release</div><div id="tag19301" onclick="CopyToClipboard('tag19301');return false;" class="tag-decoration">release-56a9ab5</div><div id="tag12224" onclick="CopyToClipboard('tag12224');return false;" class="tag-decoration">release-4.5.5</div><div id="tag14190" onclick="CopyToClipboard('tag14190');return false;" class="tag-decoration">release-v4</div><div id="tag31679" onclick="CopyToClipboard('tag31679');return false;" class="tag-decoration">release-v4.5</div><div id="tag27084" onclick="CopyToClipboard('tag27084');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/56a9ab552593fe0e8188be81daa882ab267c001f" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21325105699" target="_blank">2026-01-25 01:55:45</a></td></tr>
<tr><td><div id="tag291" onclick="CopyToClipboard('tag291');return false;" class="tag-decoration">testing</div><div id="tag11483" onclick="CopyToClipboard('tag11483');return false;" class="tag-decoration">testing-7e340b1</div><div id="tag28855" onclick="CopyToClipboard('tag28855');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7e340b128dffe46b9200b8ee6c62fca9338b4636" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21325106020" target="_blank">2026-01-25 01:55:47</a></td></tr>
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
