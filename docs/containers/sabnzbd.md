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
<tr><td><div id="tag27484" onclick="CopyToClipboard('tag27484');return false;" class="tag-decoration">nightly</div><div id="tag17715" onclick="CopyToClipboard('tag17715');return false;" class="tag-decoration">nightly-f015058</div><div id="tag25444" onclick="CopyToClipboard('tag25444');return false;" class="tag-decoration">nightly-1bc685fee37305d5858b6022fbaf754113b05ee4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f015058d7ed2910b3b99e49d22e6e6e5386d3f96" target="_blank">Version update: f2d4347e1b0afbc0ce053b4d6d3dc9b92f14a966 => 1bc685fee37305d5858b6022fbaf754113b05ee4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23737337051" target="_blank">2026-03-30 09:19:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19896" onclick="CopyToClipboard('tag19896');return false;" class="tag-decoration">release</div><div id="tag11977" onclick="CopyToClipboard('tag11977');return false;" class="tag-decoration">release-48d37cb</div><div id="tag21900" onclick="CopyToClipboard('tag21900');return false;" class="tag-decoration">release-4.5.5</div><div id="tag22352" onclick="CopyToClipboard('tag22352');return false;" class="tag-decoration">release-v4</div><div id="tag21595" onclick="CopyToClipboard('tag21595');return false;" class="tag-decoration">release-v4.5</div><div id="tag10418" onclick="CopyToClipboard('tag10418');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/48d37cb3372619463a25e66c0e4e9e4195bca12c" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/22292136862" target="_blank">2026-02-23 03:44:18</a></td></tr>
<tr><td><div id="tag21150" onclick="CopyToClipboard('tag21150');return false;" class="tag-decoration">testing</div><div id="tag17441" onclick="CopyToClipboard('tag17441');return false;" class="tag-decoration">testing-a35c3b5</div><div id="tag13499" onclick="CopyToClipboard('tag13499');return false;" class="tag-decoration">testing-5.0.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a35c3b5fed3d44ef245b6ecf7d926160e83b96e5" target="_blank">Version update: 5.0.0Beta4 => 5.0.0RC1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/23737339906" target="_blank">2026-03-30 09:19:41</a></td></tr>
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
