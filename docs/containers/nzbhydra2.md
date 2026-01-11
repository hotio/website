---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12075" onclick="CopyToClipboard('tag12075');return false;" class="tag-decoration">release</div><div id="tag5182" onclick="CopyToClipboard('tag5182');return false;" class="tag-decoration">release-8.2.1</div><div id="tag4449" onclick="CopyToClipboard('tag4449');return false;" class="tag-decoration">release-b4414d7</div><div id="tag3867" onclick="CopyToClipboard('tag3867');return false;" class="tag-decoration">release-v8</div><div id="tag27654" onclick="CopyToClipboard('tag27654');return false;" class="tag-decoration">release-v8.2</div><div id="tag3837" onclick="CopyToClipboard('tag3837');return false;" class="tag-decoration">release-v8.2.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b4414d714154776a02b833b2a7562199684098b0" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20892085953" target="_blank">2026-01-11 08:19:36</a></td></tr>
<tr><td><div id="tag24162" onclick="CopyToClipboard('tag24162');return false;" class="tag-decoration">testing</div><div id="tag9643" onclick="CopyToClipboard('tag9643');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag9265" onclick="CopyToClipboard('tag9265');return false;" class="tag-decoration">testing-c097a66</div><div id="tag19731" onclick="CopyToClipboard('tag19731');return false;" class="tag-decoration">testing-v8</div><div id="tag3576" onclick="CopyToClipboard('tag3576');return false;" class="tag-decoration">testing-v8.2</div><div id="tag18640" onclick="CopyToClipboard('tag18640');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c097a66238a8864dc6a4f555ce3887a4a8f7f1b3" target="_blank">Upstream update: noblevpn-d932ed0 => noblevpn-c55f8d5</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20892086114" target="_blank">2026-01-11 08:19:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
