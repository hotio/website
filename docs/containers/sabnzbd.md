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
<tr><td><div id="tag25807" onclick="CopyToClipboard('tag25807');return false;" class="tag-decoration">nightly</div><div id="tag2747" onclick="CopyToClipboard('tag2747');return false;" class="tag-decoration">nightly-df1c0915d07982546e282b2b52354a49cde993ba</div><div id="tag11808" onclick="CopyToClipboard('tag11808');return false;" class="tag-decoration">nightly-57928bb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/57928bbb57ed3a94e44278fdf949d574a5decf10" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20850349714" target="_blank">2026-01-09 11:23:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22184" onclick="CopyToClipboard('tag22184');return false;" class="tag-decoration">release</div><div id="tag10599" onclick="CopyToClipboard('tag10599');return false;" class="tag-decoration">release-4.5.5</div><div id="tag22102" onclick="CopyToClipboard('tag22102');return false;" class="tag-decoration">release-ba0f7e0</div><div id="tag2930" onclick="CopyToClipboard('tag2930');return false;" class="tag-decoration">release-v4</div><div id="tag27303" onclick="CopyToClipboard('tag27303');return false;" class="tag-decoration">release-v4.5</div><div id="tag18428" onclick="CopyToClipboard('tag18428');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba0f7e03b62b81c0c5f35b563563ca294a14f465" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20845768512" target="_blank">2026-01-09 08:22:38</a></td></tr>
<tr><td><div id="tag30332" onclick="CopyToClipboard('tag30332');return false;" class="tag-decoration">testing</div><div id="tag22387" onclick="CopyToClipboard('tag22387');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag23612" onclick="CopyToClipboard('tag23612');return false;" class="tag-decoration">testing-41fb143</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/41fb1432159e6e4afe091576ec9f313e488cad59" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20845768767" target="_blank">2026-01-09 08:22:39</a></td></tr>
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
