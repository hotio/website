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
<tr><td><div id="tag19374" onclick="CopyToClipboard('tag19374');return false;" class="tag-decoration">nightly</div><div id="tag2155" onclick="CopyToClipboard('tag2155');return false;" class="tag-decoration">nightly-4d73c3e9c03b7e79ce408bdcf05fce03ca7a059f</div><div id="tag15665" onclick="CopyToClipboard('tag15665');return false;" class="tag-decoration">nightly-f4dc986</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f4dc986855850ec46b200384298b9aa3405f246a" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20845768188" target="_blank">2026-01-09 08:22:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2324" onclick="CopyToClipboard('tag2324');return false;" class="tag-decoration">release</div><div id="tag17985" onclick="CopyToClipboard('tag17985');return false;" class="tag-decoration">release-4.5.5</div><div id="tag25902" onclick="CopyToClipboard('tag25902');return false;" class="tag-decoration">release-ba0f7e0</div><div id="tag16208" onclick="CopyToClipboard('tag16208');return false;" class="tag-decoration">release-v4</div><div id="tag13425" onclick="CopyToClipboard('tag13425');return false;" class="tag-decoration">release-v4.5</div><div id="tag27495" onclick="CopyToClipboard('tag27495');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba0f7e03b62b81c0c5f35b563563ca294a14f465" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20845768512" target="_blank">2026-01-09 08:22:38</a></td></tr>
<tr><td><div id="tag20902" onclick="CopyToClipboard('tag20902');return false;" class="tag-decoration">testing</div><div id="tag15371" onclick="CopyToClipboard('tag15371');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag31769" onclick="CopyToClipboard('tag31769');return false;" class="tag-decoration">testing-06c1cf2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/06c1cf22690bf9e4ca49c86f1ecad29b7cb9fbd9" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20842478639" target="_blank">2026-01-09 05:41:08</a></td></tr>
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
