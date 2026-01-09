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
<tr><td><div id="tag25489" onclick="CopyToClipboard('tag25489');return false;" class="tag-decoration">nightly</div><div id="tag3837" onclick="CopyToClipboard('tag3837');return false;" class="tag-decoration">nightly-4d73c3e9c03b7e79ce408bdcf05fce03ca7a059f</div><div id="tag20388" onclick="CopyToClipboard('tag20388');return false;" class="tag-decoration">nightly-7256adf</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7256adf022a590c73648ca992163b822c0a74319" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20842478361" target="_blank">2026-01-09 05:41:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1216" onclick="CopyToClipboard('tag1216');return false;" class="tag-decoration">release</div><div id="tag6154" onclick="CopyToClipboard('tag6154');return false;" class="tag-decoration">release-4.5.5</div><div id="tag29231" onclick="CopyToClipboard('tag29231');return false;" class="tag-decoration">release-1f6bedb</div><div id="tag18151" onclick="CopyToClipboard('tag18151');return false;" class="tag-decoration">release-v4</div><div id="tag8783" onclick="CopyToClipboard('tag8783');return false;" class="tag-decoration">release-v4.5</div><div id="tag1294" onclick="CopyToClipboard('tag1294');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1f6bedbba20dd10089f8896d87be90f0b20c16e4" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20842478367" target="_blank">2026-01-09 05:41:07</a></td></tr>
<tr><td><div id="tag26448" onclick="CopyToClipboard('tag26448');return false;" class="tag-decoration">testing</div><div id="tag7764" onclick="CopyToClipboard('tag7764');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag6181" onclick="CopyToClipboard('tag6181');return false;" class="tag-decoration">testing-06c1cf2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/06c1cf22690bf9e4ca49c86f1ecad29b7cb9fbd9" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20842478639" target="_blank">2026-01-09 05:41:08</a></td></tr>
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
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

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
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
