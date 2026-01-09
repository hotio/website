---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/sabnzbd/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26984" onclick="CopyToClipboard('tag26984');return false;" class="tag-decoration">nightly</div><div id="tag4439" onclick="CopyToClipboard('tag4439');return false;" class="tag-decoration">nightly-df1c0915d07982546e282b2b52354a49cde993ba</div><div id="tag30434" onclick="CopyToClipboard('tag30434');return false;" class="tag-decoration">nightly-f7a6d40</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f7a6d40770e5dabc438ce16c6f9c9839690985b2" target="_blank">Version update: 4d73c3e9c03b7e79ce408bdcf05fce03ca7a059f => df1c0915d07982546e282b2b52354a49cde993ba</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20849167931" target="_blank">2026-01-09 10:36:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7333" onclick="CopyToClipboard('tag7333');return false;" class="tag-decoration">release</div><div id="tag27042" onclick="CopyToClipboard('tag27042');return false;" class="tag-decoration">release-4.5.5</div><div id="tag29866" onclick="CopyToClipboard('tag29866');return false;" class="tag-decoration">release-ba0f7e0</div><div id="tag20650" onclick="CopyToClipboard('tag20650');return false;" class="tag-decoration">release-v4</div><div id="tag2409" onclick="CopyToClipboard('tag2409');return false;" class="tag-decoration">release-v4.5</div><div id="tag15880" onclick="CopyToClipboard('tag15880');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba0f7e03b62b81c0c5f35b563563ca294a14f465" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20845768512" target="_blank">2026-01-09 08:22:38</a></td></tr>
<tr><td><div id="tag4757" onclick="CopyToClipboard('tag4757');return false;" class="tag-decoration">testing</div><div id="tag5160" onclick="CopyToClipboard('tag5160');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag8080" onclick="CopyToClipboard('tag8080');return false;" class="tag-decoration">testing-41fb143</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/41fb1432159e6e4afe091576ec9f313e488cad59" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20845768767" target="_blank">2026-01-09 08:22:39</a></td></tr>
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
