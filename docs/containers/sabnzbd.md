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
<tr><td><div id="tag22869" onclick="CopyToClipboard('tag22869');return false;" class="tag-decoration">nightly</div><div id="tag716" onclick="CopyToClipboard('tag716');return false;" class="tag-decoration">nightly-df1c0915d07982546e282b2b52354a49cde993ba</div><div id="tag10823" onclick="CopyToClipboard('tag10823');return false;" class="tag-decoration">nightly-57928bb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/57928bbb57ed3a94e44278fdf949d574a5decf10" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20850349714" target="_blank">2026-01-09 11:23:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6530" onclick="CopyToClipboard('tag6530');return false;" class="tag-decoration">release</div><div id="tag21149" onclick="CopyToClipboard('tag21149');return false;" class="tag-decoration">release-4.5.5</div><div id="tag12882" onclick="CopyToClipboard('tag12882');return false;" class="tag-decoration">release-655d32d</div><div id="tag23477" onclick="CopyToClipboard('tag23477');return false;" class="tag-decoration">release-v4</div><div id="tag27369" onclick="CopyToClipboard('tag27369');return false;" class="tag-decoration">release-v4.5</div><div id="tag23610" onclick="CopyToClipboard('tag23610');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/655d32dae76546823464b1aecbc49544734b938b" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20850350216" target="_blank">2026-01-09 11:23:27</a></td></tr>
<tr><td><div id="tag18259" onclick="CopyToClipboard('tag18259');return false;" class="tag-decoration">testing</div><div id="tag29934" onclick="CopyToClipboard('tag29934');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag31614" onclick="CopyToClipboard('tag31614');return false;" class="tag-decoration">testing-ad408c7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ad408c767ed2f6876799173aeb2e222c70539e60" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20850350529" target="_blank">2026-01-09 11:23:28</a></td></tr>
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
