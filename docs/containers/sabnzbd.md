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
<tr><td><div id="tag29104" onclick="CopyToClipboard('tag29104');return false;" class="tag-decoration">nightly</div><div id="tag9032" onclick="CopyToClipboard('tag9032');return false;" class="tag-decoration">nightly-64feaae</div><div id="tag18150" onclick="CopyToClipboard('tag18150');return false;" class="tag-decoration">nightly-ddc84542eb78a8021392e66c1554ee0f38a4cc96</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/64feaae07447d9af2a174ca7af25ab0a0cfb0a7d" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180076" target="_blank">2026-01-26 10:20:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10280" onclick="CopyToClipboard('tag10280');return false;" class="tag-decoration">release</div><div id="tag31202" onclick="CopyToClipboard('tag31202');return false;" class="tag-decoration">release-9fe17d2</div><div id="tag32444" onclick="CopyToClipboard('tag32444');return false;" class="tag-decoration">release-4.5.5</div><div id="tag5906" onclick="CopyToClipboard('tag5906');return false;" class="tag-decoration">release-v4</div><div id="tag21644" onclick="CopyToClipboard('tag21644');return false;" class="tag-decoration">release-v4.5</div><div id="tag13010" onclick="CopyToClipboard('tag13010');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9fe17d263a677e133380a75b7f672e943c6b7036" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21354180383" target="_blank">2026-01-26 10:20:52</a></td></tr>
<tr><td><div id="tag17145" onclick="CopyToClipboard('tag17145');return false;" class="tag-decoration">testing</div><div id="tag28366" onclick="CopyToClipboard('tag28366');return false;" class="tag-decoration">testing-7e340b1</div><div id="tag22287" onclick="CopyToClipboard('tag22287');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7e340b128dffe46b9200b8ee6c62fca9338b4636" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21325106020" target="_blank">2026-01-25 01:55:47</a></td></tr>
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
